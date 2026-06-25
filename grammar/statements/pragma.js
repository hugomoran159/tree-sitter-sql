import { paren_list } from "../helpers.js";

export default {

  pragma_statement: $ => seq(
    $.keyword_pragma,
    $.object_reference,
    optional(
      choice(
        seq(
          choice('=', $.keyword_to),
          choice(
            $.literal,
            $.identifier,
            $.keyword_on,
            $.keyword_off,
            $.keyword_true,
            $.keyword_false,
          ),
        ),
        paren_list($._expression, true),
      ),
    ),
  ),

};
