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
console.log("In 2 3 1")
_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_1 = {
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
        return ['img'];

    },

    /**
     * Process the registered element.
     *
     * @param {DOMNode} element The element registered.
     * @param {DOMNode} top     The top element of the tested code.
     */
    process: function(element, top)
    {
        // /-/media/Project/Altria/Altria/altria-logo.png?h=115&w=300&hash=98161E3C314C866F17FC52EA6C89DA60
        // /-/media/Project/Altria/Altria/altria-logo.gif?h=115&w=300&hash=98161E3C314C866F17FC52EA6C89DA60
        console.log('In 2_3_1_src')
        if (element.hasAttribute('src') == true){
            src = element.getAttribute('src')
            if(src.includes('gif')){
                console.log(src)

            }
            

        }

        // this.gifsrccheck(element,top)
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_3_1_G19,G176"), 'G19,G176');
        // The "small" flashing area is deliberately vague - users should see
        // technique G176 for more details, as the threshold depends on both the
        // size and resolution of a screen.
        // The technique gives a baseline (based on a 15-17 inch monitor read at
        // 22-26 inches, at 1024 x 768 resolution). A 10-degree field of vision is
        // approximately 341 x 256 pixels in this environment, and a flashing area
        // needs to be no more than 25% of this (not necessarily rectangular).
        // HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_3_1_G19,G176"), 'G19,G176');

    }
};
