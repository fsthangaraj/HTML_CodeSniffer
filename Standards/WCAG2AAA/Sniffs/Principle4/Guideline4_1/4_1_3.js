/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Pty Ltd (ABN 77 084 670 600)                                 |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */
console.log('In 4 1 3')
_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_3 = {
    /**
     * Determines the elements to register for processing.
     *
     * Each element of the returned array can either be an element name, or "_top"
     * which is the top element of the tested code.
     *
     * @returns {Array} The list of elements.
     */
    register: function()
    {
        return [
            'form',
            '_top'];

    },

    /**
     * Process the registered element.
     *
     * @param {DOMNode} element The element registered.
     * @param {DOMNode} top     The top element of the tested code.
     */
    process: function(element, top)
    {
        if (element == top) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check"), '');
        }else{
            HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("4_1_3_ARIA19,G83,G84,G85,G139,G177,G194"), 'ARIA19,G83,G84,G85,G139,G177,G194');
        }
    }
};
