def json_plumber(pipeline_package):
    """
    """
    json_output = {"structured_text_output": None, "csv_output": None}
    json_output["structured_text_output"] = pipeline_package["structured_text_output"]["output"] 
    json_output["csv_output"] = pipeline_package["csv_output"]["output"] 
    pipeline_package["json_output"]["output"] = json_output
    return pipeline_package


