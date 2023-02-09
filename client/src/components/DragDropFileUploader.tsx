import React, { useState, useRef } from 'react'
import FilePreview from './FilePreview'
import Spinner from './Spinner'
import uploadLogo from '../assets/cloud-upload.svg'
import './DragDropFileUploader.css'

const DragDropFileUploader = (props: any) => {
    const [fileList, setFileList] = useState<File[]>([]);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const dragRef = useRef<HTMLDivElement>(null);

    const onFileDrop = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const updatedFileList = [...fileList, ...event.target.files];

        setFileList(updatedFileList);
    }

    const handleUpload = async () => {
        let formData = new FormData();
        // Change the port accordingly
        const url = "http://localhost:8080/api/uploadfile"

        setIsUploading(true)

        for (let i = 0; i < fileList.length; i++) {
            formData.append(`image`, fileList[i], fileList[i].name);

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const result = await response.json();

                // EXAMPLE RESULT FOR TESTING PURPOSES
                // const result = ({'structured_text_output': [[null, null, null, null, null, null, null, null], 
                // [null, 'PROPERTY', 'RESERVE PRICE', 'SIZE', 'DATE', 'BANK', null], 
                // [null, 'CR-6-8 ZEVA RESIDENCE @ SERI KEMBANGAN', 'RM 174,960', null, '14-Sep', 'AMBANK', 'SOLD RM 194,000'], 
                // [null, 'B-2-35, BOULEVARD 51 @ JALAN SS9A/18 P!', 'RM 203,000', null, '14-Sep', 'UOB', 'SOLD RM 208,006'], 
                // [null, '8-18 RESIDENS! AMAN @ SEMENYIH', 'RM 243,000', null, '28-Sep', 'HLBB', 'SOLD RM 260,000'], 
                // [null, '22 JALAN LE 3/3, LAKE EDGE PUCHONG', 'RM 1,200,600', '2140 SF', '22-5ep', 'ALLIANCE', 'SOLD RM 1,360,000'], 
                // [null, 'SB-7-1 PARAGON PANGEA SOFO @ CYBERIJAYA', 'RM 226,000', null, '20-Sep', 'MBB', 'SOLD RM 226,006'], 
                // [null, 'B-7-17 PLAZA DAMAS 3 @ SR! HARTAMAS KL', 'RM 366,200', null, '14-Sep', 'HLBB', 'SOLD RM 345,000'], 
                // [null, '1074, BLOCK E, RIANA GREEN @ TROPICANA PI', 'RM 324,000', null, '12-Sep', 'HLBE', 'SOLD RM 324,006'], 
                // [null, 'A-13-7 CRYSTAL SERIN @ CYBERIAYA', 'RM 371,800', '1579 SF', '12-Sep', 'HLBB', 'SOLD RM 371,806'], 
                // [null, '12-10 SUITE CEYLONZ @ BANGSAR SOUTH KL', 'RM 380, 700', null, '14-Sep', 'AMBANK', 'SOLD RM 404,000'], 
                // [null, '16-13 SUITE CEYLONZ @ RAJA CHULAN KL', 'RM 388,800', null, '14-Sep', 'AMBANK', 'SOLD RM 404,000'], 
                // [null, 'A-2-3 CRYSTAL SERIN @ CYBERIAYA', 'RM 321,000', '1521 SF', '21-Sep', 'UOB', 'SOLD RM 326,060'], 
                // [null, '20-16 RES 280 @ SELAYANG', 'RM 307,800', null, '2/-Sep', 'AMBANK', 'SOLD RM 343,006'], 
                // [null, 'D-18-10 PACIFIC STAR @ SEKSYEN 13 PJ', 'RM 381,000', null, '7-Sep', 'UOB', 'SOLD RM 396,000'], 
                // ['BUMI', 'C-15-08 KLTS @ JALAN GOMBAK KL', 'RM 379,080', '1089 SF', '9-Sep', 'AMBANK', 'SOLD RM 416,006'], 
                // [null, 'A-32-5 LAKEPARK RESIDENCE @ JLN IPOH SELAYANG', 'RM 342,600', null, '27-Sep', 'RHB', 'SOLD RM 364,006'], 
                // [null, '1-16-13 GAYA RESORT HOME @ KEMUNING DAMAI', 'RM 417,150', null, '14-Sep', 'AMBANK |', 'SOLD RM 417,156'], 
                // [null, '12-12, COURT 28, JLN IPOH KL', 'RM 441,000', null, '13-Sep', 'HLBB', 'SOLD RM 500,000'], 
                // [null, 'S-2-17 EMPORIS SHOPLOTS @ KOTA DSABA', 'RM 398,600', '1238 SF', '27-Sep', 'RHB', 'SOLD RM 446,006'], 
                // [null, '3 JALAN PH 9, PUTERI HEIGHTS RAWANG', 'RM 512,000', '5231 SF', '20-Sep', 'MBB', 'SOLD RM 515,000'], 
                // ['BUM!', '36, JALAN MR 2/11, M RESIOENCE 2 RAWANG', 'RM 530,000', null, '20-Sep', 'MBB', 'SOLD RM 623,000'], 
                // [null, '3-15-11 M- CITY @ JLN AMPANG KL', 'RM 446,100', '1041 SF', '2/-Sep', 'RHB', 'SOLD RM 496,000'], 
                // [null, 'B1-32-3A, TITIWANGSA SENTRAL @ KL', 'RM 438,000', '1130 SF', '21-Sep', 'UOB', 'SOLD RM 456,000'], 
                // [null, 'A-14-10 PALOMA RESIDENSI @ METROPARK SUBANG', 'RM 476,830', null, '27-Sep', 'RHB', 'SOLD RM 506,000'], 
                // [null, 'C-19-6 REGALIA @ KLCC', 'RM 526,000', '£238 SF', '20-Sep', 'OC&C', 'SOLD RM 600,000'], 
                // [null, 'A-26-3 PAISLEY @ METROPARK SUBANG', 'RM 550,800', null, '26-Sep', 'HLBB', 'SOLD RM 618,006'], 
                // [null, 'T2-17-8 RIMBA RESIDENCE @ BDR KINRARA SB/5', 'RM 583,200', '1422 SF', '12-Sep', 'RHB', 'SOLD RM 640,000'], 
                // [null, '28-11 SUASANA BUKIT CEYLON 2 @ RAJA CHULAN KL', 'RM 511,000', null, '7-Sep', 'UOB', 'SOLD RM 511,000'], 
                // [null, 'A-9-8 VERVE SUITE @ OXKR KL', 'RM 510,300', null, '2?7-Sep', 'RHB', 'SOLD RM 555,000'], 
                // [null, 'A-22-2 PAISLEY @ METROPARK SUBANG', 'RM 567,000', null, '2?-Sep', 'AMBANK', 'SOLD RM 582,000'], 
                // [null, '3-17-6 M CITY @ JLN AMPANG KL', 'RM 564,000', null, '14-Sep', 'UOB', 'SOLD RM 504,000'], 
                // ['CASH', 'C-19-7 PACIFIC STAR @ SEKSYEN 13 PJ', 'RM 697,000', '1242 SF', '7-Sep', 'UOB', 'SOLD RM 697.000'], 
                // [null, '20-06 CENDANA @ KLCC', 'RM 1,131,000', '2626 SF', '14-Sep', 'UOB', 'SOLD RM 1,131,000'], 
                // [null, 'A-234-05 NIDOZ @ DESA PETALING KL', 'RM 702,000', '1399 SF', '2?-Sep', 'RKB', 'SOLD RM 702,000'], 
                // [null, '19-10 ANGGUN JSI @ MEDAN TUANKU KL', 'RM 641,500', null, '2/-Sep', 'RHB', 'SOLD RM 641,500'], 
                // [null, 'C-13-6 VIVO 9 SEPUTEH @ OKR KL', 'RM 557,685', '1248 SF', '29-Sep', 'AMBANK', 'SOLD RM 635,000'], 
                // ['BUMI', '30 JALAN TROPICANA HEIGHTS 2/6, KAJANG', 'RM 899,100', '2314 SF', '29-Sep', 'AMBANK', 'SOLD RM 970,006'], 
                // [null, '4-5-1 PUSAT KORPORAT MELAWATI KL', 'RM 770,000', '1442 SF', '29-Sep', 'SME', 'SOLD RM 770,006'], 
                // [null, '&-2-10, NINE RESIDENCE @ CHERAS', 'RM 382,638', '1211 SF', '29-Sep', 'AMBANK |', 'SOLD RM 382,633'], 
                // [null, '&-34-7 ASTETICA @ THE MINES SERDANG', 'RM 405,000', '1154 SF', '29-Sep', 'BSN', 'SOLD RM 405,000']], 
                // 'csv_output': '0,1,2,3,4,5,6,7\r\n,,,,,,,\r\n,PROPERTY,RESERVE PRICE,SIZE,DATE,BANK,,\r\n,CR-6-8 ZEVA RESIDENCE @ SERI KEMBANGAN,"RM 174,960",,14-Sep,AMBANK,"SOLD RM 194,000",\r\n,"B-2-35, BOULEVARD 51 @ JALAN SS9A/18 P!","RM 203,000",,14-Sep,UOB,"SOLD RM 208,006",\r\n,8-18 RESIDENS! AMAN @ SEMENYIH,"RM 243,000",,28-Sep,HLBB,"SOLD RM 260,000",\r\n,"22 JALAN LE 3/3, LAKE EDGE PUCHONG","RM 1,200,600",2140 SF,22-5ep,ALLIANCE,"SOLD RM 1,360,000",\r\n,SB-7-1 PARAGON PANGEA SOFO @ CYBERIJAYA,"RM 226,000",,20-Sep,MBB,"SOLD RM 226,006",\r\n,B-7-17 PLAZA DAMAS 3 @ SR! HARTAMAS KL,"RM 366,200",,14-Sep,HLBB,"SOLD RM 345,000",\r\n,"1074, BLOCK E, RIANA GREEN @ TROPICANA PI","RM 324,000",,12-Sep,HLBE,"SOLD RM 324,006",\r\n,A-13-7 CRYSTAL SERIN @ CYBERIAYA,"RM 371,800",1579 SF,12-Sep,HLBB,"SOLD RM 371,806",\r\n,12-10 SUITE CEYLONZ @ BANGSAR SOUTH KL,"RM 380, 700",,14-Sep,AMBANK,"SOLD RM 404,000",\r\n,16-13 SUITE CEYLONZ @ RAJA CHULAN KL,"RM 388,800",,14-Sep,AMBANK,"SOLD RM 404,000",\r\n,A-2-3 CRYSTAL SERIN @ CYBERIAYA,"RM 321,000",1521 SF,21-Sep,UOB,"SOLD RM 326,060",\r\n,20-16 RES 280 @ SELAYANG,"RM 307,800",,2/-Sep,AMBANK,"SOLD RM 343,006",\r\n,D-18-10 PACIFIC STAR @ SEKSYEN 13 PJ,"RM 381,000",,7-Sep,UOB,"SOLD RM 396,000",\r\nBUMI,C-15-08 KLTS @ JALAN GOMBAK KL,"RM 379,080",1089 SF,9-Sep,AMBANK,"SOLD RM 416,006",\r\n,A-32-5 LAKEPARK RESIDENCE @ JLN IPOH SELAYANG,"RM 342,600",,27-Sep,RHB,"SOLD RM 364,006",\r\n,1-16-13 GAYA RESORT HOME @ KEMUNING DAMAI,"RM 417,150",,14-Sep,AMBANK |,"SOLD RM 417,156",\r\n,"12-12, COURT 28, JLN IPOH KL","RM 441,000",,13-Sep,HLBB,"SOLD RM 500,000",\r\n,S-2-17 EMPORIS SHOPLOTS @ KOTA DSABA,"RM 398,600",1238 SF,27-Sep,RHB,"SOLD RM 446,006",\r\n,"3 JALAN PH 9, PUTERI HEIGHTS RAWANG","RM 512,000",5231 SF,20-Sep,MBB,"SOLD RM 515,000",\r\nBUM!,"36, JALAN MR 2/11, M RESIOENCE 2 RAWANG","RM 530,000",,20-Sep,MBB,"SOLD RM 623,000",\r\n,3-15-11 M- CITY @ JLN AMPANG KL,"RM 446,100",1041 SF,2/-Sep,RHB,"SOLD RM 496,000",\r\n,"B1-32-3A, TITIWANGSA SENTRAL @ KL","RM 438,000",1130 SF,21-Sep,UOB,"SOLD RM 456,000",\r\n,A-14-10 PALOMA RESIDENSI @ METROPARK SUBANG,"RM 476,830",,27-Sep,RHB,"SOLD RM 506,000",\r\n,C-19-6 REGALIA @ KLCC,"RM 526,000",£238 SF,20-Sep,OC&C,"SOLD RM 600,000",\r\n,A-26-3 PAISLEY @ METROPARK SUBANG,"RM 550,800",,26-Sep,HLBB,"SOLD RM 618,006",\r\n,T2-17-8 RIMBA RESIDENCE @ BDR KINRARA SB/5,"RM 583,200",1422 SF,12-Sep,RHB,"SOLD RM 640,000",\r\n,28-11 SUASANA BUKIT CEYLON 2 @ RAJA CHULAN KL,"RM 511,000",,7-Sep,UOB,"SOLD RM 511,000",\r\n,A-9-8 VERVE SUITE @ OXKR KL,"RM 510,300",,2?7-Sep,RHB,"SOLD RM 555,000",\r\n,A-22-2 PAISLEY @ METROPARK SUBANG,"RM 567,000",,2?-Sep,AMBANK,"SOLD RM 582,000",\r\n,3-17-6 M CITY @ JLN AMPANG KL,"RM 564,000",,14-Sep,UOB,"SOLD RM 504,000",\r\nCASH,C-19-7 PACIFIC STAR @ SEKSYEN 13 PJ,"RM 697,000",1242 SF,7-Sep,UOB,SOLD RM 697.000,\r\n,20-06 CENDANA @ KLCC,"RM 1,131,000",2626 SF,14-Sep,UOB,"SOLD RM 1,131,000",\r\n,A-234-05 NIDOZ @ DESA PETALING KL,"RM 702,000",1399 SF,2?-Sep,RKB,"SOLD RM 702,000",\r\n,19-10 ANGGUN JSI @ MEDAN TUANKU KL,"RM 641,500",,2/-Sep,RHB,"SOLD RM 641,500",\r\n,C-13-6 VIVO 9 SEPUTEH @ OKR KL,"RM 557,685",1248 SF,29-Sep,AMBANK,"SOLD RM 635,000",\r\nBUMI,"30 JALAN TROPICANA HEIGHTS 2/6, KAJANG","RM 899,100",2314 SF,29-Sep,AMBANK,"SOLD RM 970,006",\r\n,4-5-1 PUSAT KORPORAT MELAWATI KL,"RM 770,000",1442 SF,29-Sep,SME,"SOLD RM 770,006",\r\n,"&-2-10, NINE RESIDENCE @ CHERAS","RM 382,638",1211 SF,29-Sep,AMBANK |,"SOLD RM 382,633",\r\n,&-34-7 ASTETICA @ THE MINES SERDANG,"RM 405,000",1154 SF,29-Sep,BSN,"SOLD RM 405,000",\r\n'})

                console.log("Success:", result)

                // props.updateDownloadableData(Object.values(result.structured_text_output))
                props.updateDownloadableData(result)
                

            } catch (error) {
                console.log(error)
            }
            
            formData = new FormData();
        }

        setIsUploading(false)

        // Empties the files that has been uploaded
        setFileList([]) 
    }

    const fileRemove = (file: File) => {
        const updatedFileList = [...fileList];
        updatedFileList.splice(updatedFileList.indexOf(file), 1);
        setFileList(updatedFileList);
    }

    const onDragEnter = () => {
        dragRef.current!.classList.add('dragover');
    }

    const onDragLeave = () => {
        dragRef.current!.classList.remove('dragover');
    }

    const onDrop = () => {
        dragRef.current!.classList.remove('dragover');
    }

    return (
        <div className="upload-section">
            <div className="drag-drop-area" 
                ref={dragRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <img className="drag-drop-area__img" src={uploadLogo} alt="upload logo" />
                <p className="drag-drop-area__label">Drag & Drop your files here</p>
                <input className="drag-drop-input" type="file" multiple accept=".jpg, .png, .pdf" onChange={onFileDrop} />
            </div>

            <button className="upload-button" onClick={handleUpload} disabled={isUploading} >
                {isUploading ? <><Spinner /> &nbsp; Loading</>: "Upload Images"}
            </button>

            <FilePreview fileList={fileList} fileRemove={fileRemove}/>
        </div>
    )
}

export default DragDropFileUploader