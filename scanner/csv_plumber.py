import pandas as pd

def csv_plumber(pipeline_package):

    if pipeline_package["structured_text_output"]["output"]:
        # data
        structured_text_data = pipeline_package["structured_text_output"]["output"]

        # 2d data structure
        data_frame = pd.DataFrame(structured_text_data)

        pipeline_package["csv_output"]["output"] = data_frame.to_csv(index = False)

    return pipeline_package
        


if __name__=="__main__":
    data =   {
            "file_path": [[None, 'A-234-05 NIDOZ @ DESA PETALING KL', 'RM 702,000', '1399 SF', '2?7-Sep', 'RHB', 'SOLD RM 702,000'], [None, '19-10 ANGGUN JSI @ MEDAN TUANKU KL', 'RM 641,500', '732 SF', '27-Sep', 'RHB', 'SOLD RM 641,506'], [None, 'C-13-6 VIVO 9 SEPUTEH @ OKR KL', 'RM 557,685', '1248 SF', '29-Sep', 'AMBANK', 'SOLD RM 635,000'], ['BUMI', '30 JALAN TROPICANA HEIGHTS 2/6, KAJANG', 'RM 899,100', '2314 SF', '29-Sep', 'AMBANK', 'SOLD RM 970,006'], [None, '4-5-1 PUSAT KORPORAT MELAWATI KL', 'RM 770,000', '1442 SF', '29-Sep', 'SME', 'SOLD RM 770,006'], [None, '&-2-10, NINE RESIDENCE @ CHERAS', 'RM 382,638', '1211 SF', '29-Sep', 'AMBANK |', 'SOLD RM 382,633'], [None, 'A-34-7 ASTETICA @ THE MINES SERDANG', 'RM 405,000', '1154 SF', '29-Sep', 'BSN', 'SOLD RM 405,000']],
            "number_of_columns": "number_of_columns", 
            "structured_text_output": {"output": [[None, 'A-234-05 NIDOZ @ DESA PETALING KL', 'RM 702,000', '1399 SF', '2?7-Sep', 'RHB', 'SOLD RM 702,000'], [None, '19-10 ANGGUN JSI @ MEDAN TUANKU KL', 'RM 641,500', '732 SF', '27-Sep', 'RHB', 'SOLD RM 641,506'], [None, 'C-13-6 VIVO 9 SEPUTEH @ OKR KL', 'RM 557,685', '1248 SF', '29-Sep', 'AMBANK', 'SOLD RM 635,000'], ['BUMI', '30 JALAN TROPICANA HEIGHTS 2/6, KAJANG', 'RM 899,100', '2314 SF', '29-Sep', 'AMBANK', 'SOLD RM 970,006'], [None, '4-5-1 PUSAT KORPORAT MELAWATI KL', 'RM 770,000', '1442 SF', '29-Sep', 'SME', 'SOLD RM 770,006'], [None, '&-2-10, NINE RESIDENCE @ CHERAS', 'RM 382,638', '1211 SF', '29-Sep', 'AMBANK |', 'SOLD RM 382,633'], [None, 'A-34-7 ASTETICA @ THE MINES SERDANG', 'RM 405,000', '1154 SF', '29-Sep', 'BSN', 'SOLD RM 405,000']]},
            "csv_output": {"output": None},
            }   

    csv_plumber(data)

    