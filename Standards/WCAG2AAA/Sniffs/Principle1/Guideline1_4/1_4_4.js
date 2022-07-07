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

// _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_4 = {
//     /**
//      * Determines the elements to register for processing.
//      *
//      * Each element of the returned array can either be an element name, or "_top"
//      * which is the top element of the tested code.
//      *
//      * @returns {Array} The list of elements.
//      */
//     register: function()
//     {
//         return ['_top'];

//     },

//     /**
//      * Process the registered element.
//      *
//      * @param {DOMNode} element The element registered.
//      * @param {DOMNode} top     The top element of the tested code.
//      */
//     process: function(element, top)
//     {
//         HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_4_G142"), 'G142');
//     }
// };


console.log('In 1_4_4')
 _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_4 = {
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
         return ['meta'];
 
     },
 
     /**
      * Process the registered element.
      *
      * @param {DOMNode} element The element registered.
      * @param {DOMNode} top     The top element of the tested code.
      */
     process: function(element, top)
     {
         console.log('1_4_4 start')
         if (element.hasAttribute('name') === true) {
             console.log('1_4_4 start in true')
             if ((String(element.getAttribute('name'))).toLowerCase() === 'viewport') {
                 console.log('1_4_4 start in')
                 console.log(element)
                 HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_4_4_G142"), 'G142');
             }
         }
         // console.log('1_4_4 start')
         // // console.log(element)
         // console.log('1_4_4 end')
         // HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_4_G142"), 'G142');
     }
 };