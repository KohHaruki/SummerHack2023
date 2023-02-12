from img_plumber import img_plumber
from csv_plumber import csv_plumber
from json_plumber import json_plumber
import os
import json

class Pipeline:
    """ For Scanning and extracting data from tables 
    """
    def __init__(self, file_path, **config) -> None:
        """ For creating the pipeline dictionary
        """

        self.pipeline_package = {
            "file_path": file_path,
            "number_of_columns":  config["number_of_columns"] if "number_of_columns" in config.keys() else 999, 
            "structured_text_output": {"output": None},
            "csv_output": {"output": None},
            "json_output": {"output": None}
        }

        self.pipeline_components = [
            self.structured_text_component,
            self.csv_output_component,
            self.json_output_component
        ]

    def execute(self):
        """ Execution Queue
        """
        for _ in range(len(self.pipeline_components)):
            self.pipeline_components[_]()
    
    def structured_text_component(self):
        self.pipeline_package = img_plumber(self.pipeline_package)
    def csv_output_component(self):
        self.pipeline_package = csv_plumber(self.pipeline_package)
    def json_output_component(self):
        self.pipeline_package = json_plumber(self.pipeline_package)

if __name__ == "__main__":
    # self.pipeline_package = {
    #     "file_path": file_path,
    #     "csv_path": config["csv_output"] if "csv_output" in config.keys() else None, 
    #     "number_of_columns": number_of_columns, 
    #     "structured_text_output": {},
    # }

    # import os
    # file_path = "../scanner/image_to_scan/image.png"
    file_path = "./image.png"
    scanner = Pipeline(file_path) # number_of_columns=7
    scanner.execute()
    json_string = json.dumps(scanner.pipeline_package["json_output"]["output"])#scanner.pipeline_package["structured_text_output"]["output"]
    print(json_string)