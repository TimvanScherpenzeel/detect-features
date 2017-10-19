/**
 * Regular Expression snippets to validate Google Analytics tracking code
 * see http://code.google.com/apis/analytics/docs/concepts/gaConceptsAccounts.html#webProperty
 *
 * @author  Faisalman <movedpixel@gmail.com>
 * @license http://www.opensource.org/licenses/mit-license.php
 * @link    http://gist.github.com/faisalman
 * @param   str     string to be validated
 * @return  Boolean 
 */ 
 
export default function isValidUACode(str){
    return (/^ua-\d{4,9}-\d{1,4}$/i).test(str.toString());
}