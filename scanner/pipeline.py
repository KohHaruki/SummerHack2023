from img_plumber import img_plumber

class Pipeline:
    """ For Scanning and extracting data from tables 
    """
    def __init__(self, file_path, number_of_columns, **config) -> None:
        """ For creating the pipeline dictionary
        """

        self.pipeline_package = {
            "file_path": file_path,
            "csv_path": config["csv_output"] if "csv_output" in config.keys() else None, 
            "number_of_columns": number_of_columns, 
            "structured_text_output": {"output":[]},
        }

        self.pipeline_components = [
            self.structured_text_component
        ]

    def execute(self):
        """ Execution Queue
        """
        for _ in range(len(self.pipeline_components)):
            self.pipeline_components[_]()
    
    def structured_text_component(self):
        self.pipeline_package = img_plumber(self.pipeline_package)
        

if __name__ == "__main__":
    # self.pipeline_package = {
    #     "file_path": file_path,
    #     "csv_path": config["csv_output"] if "csv_output" in config.keys() else None, 
    #     "number_of_columns": number_of_columns, 
    #     "structured_text_output": {},
    # }

    # scanner = Pipeline("image_to_scan/image.png", number_of_columns=7)
    # scanner.execute()
    # print(scanner.pipeline_package["structured_text_output"]["output"])

    print('{"Successful": "Yes"}')