/**
 * @private
 * @type {Array}
 */
const customs = [];

/**
 * @private
 * @type {function}
 * @return {Compiler}
 */
let origCreateChildCompiler;

/**
 * @public
 * 
 * @param {any} target
 * @param {any} mixins
 * @returns
 */
const MixerWebpackPlugin = (target, ...mixins) => {
    const origApply = target.apply;
    let callTargetApply = false;
    let counter = 0;

    target.apply = function customApply(compiler) {
        if (!customs.length) {
            origCreateChildCompiler = compiler.createChildCompiler;

            compiler.createChildCompiler = function customCreateChildCompiler(...args) {
                if (customs[counter]) {
                    return customs[counter++](...args);
                } else {
                    return origCreateChildCompiler.apply(compiler, args);
                }
            }
        }

        customs.push(function applyMixins(...args) {
            const childCompiler = origCreateChildCompiler.apply(compiler, args);

            if (!callTargetApply) {
                callTargetApply = true;
                childCompiler.apply(...mixins);
            }

            return childCompiler;
        });

        origApply.call(target, compiler);
    }

    return target;
};

export default MixerWebpackPlugin;