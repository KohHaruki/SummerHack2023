def output_plumber(pipeline_package):
    output_dictionary = {"structured_text_output": None, "csv_text_output": None}
    output_dictionary["structured_text_output"] = pipeline_package["structured_text_output"]["output"]
    pass