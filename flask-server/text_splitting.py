from text_processing import replacing_keywords

symbols_list = {
    "//": '\n',
    "/*": "*/",
    "\"": "\"",
    "\'": "\'"
}

def split_str(inp_str):
    big_str = inp_str + '\n '
    length = len(big_str)
    i = 0
    proc_str = ""
    pending_str = ""

    while i < length:
        curr_char = big_str[i]

        # multi line comment
        if curr_char == "/" and big_str[i + 1] == "*":
            # add before string, processed
            proc_str += replacing_keywords(pending_str)
            pending_str = ""

            end = big_str.index("*/", i) + 2
            proc_str += big_str[i:end]
            i = end
        elif curr_char == "/" and big_str[i + 1] == "/":
            # add before string, processed
            proc_str += replacing_keywords(pending_str)
            pending_str = ""

            end = big_str.index("\n", i) + 1
            proc_str += big_str[i:end]
            i = end
        elif curr_char == "\"" or curr_char == "\'":
            # add before string, processed
            proc_str += replacing_keywords(pending_str)
            pending_str = ""

            end = big_str.index(curr_char, i + 1) + 1
            proc_str += big_str[i:end]
            i = end
        else:
            pending_str += curr_char
            i += 1
    
    proc_str += replacing_keywords(pending_str)
    return proc_str[:-2]
