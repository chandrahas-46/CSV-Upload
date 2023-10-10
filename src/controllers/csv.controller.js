import csvModel from '../models/csv.schema.js';
// import csvParser from 'csv-parser';
import papa from 'papaparse';
import path from 'path';
import fs from 'fs';

export default class CSVController{
    async home(req, res){
        try{
            const csvFiles = await csvModel.find({});
            return res.render('home',{
                files : csvFiles,
                title: 'Home'
            })
        }
        catch(err){
            console.error(err);
            res.status(500).send('Internal server error.');
        }
    }

    async uploadFile(req, res) {
        try{
            if (!req.file) {
                // handle error if file not present
                fs.unlinkSync(filePath);
                return res.status(400).send('Please upload a CSV file.');
            }
            if (req.file.mimetype !== 'text/csv') {
                // handle error if file is not CSV
                fs.unlinkSync(filePath);
                return res.status(400).send('Only CSV files are allowed.');
            }
    
            const { filename } = req.file;
    
            // Use the fs module to read the uploaded CSV file
            const filePath = path.join(path.resolve(), `./public/csvUpload/${filename}`);


            const csvData = fs.readFileSync(filePath, 'utf8');
            const conversedFile = papa.parse(csvData, { 
                header: false  
            });

            // console.log("**************************** CSV Data from local csv File ****************************");
            let csvFile = csvModel.create({
                filename: req.file.originalname,
                file: conversedFile.data
            });
            // await csvFile.save();
            fs.unlinkSync(filePath);
            res.redirect('back');
        }
        catch(err){
            console.error(err);
            res.status(500).send('Upload File Internal server error.');
        }

    }


    async view(req, res){
        try{
            const csvFile = await csvModel.findById(req.params.id);
            if (!csvFile) {
                return res.status(404).send('File not found');
            }
            // console.log("**************************** CSV Data from mongodb ****************************");
            return res.render('csvData2',{
                title: 'Home',
                file: csvFile.filename,
                keys: csvFile.file[0],
                results: csvFile.file.slice(1)
            })
            
        }
        catch(err){
            console.error(err);
            res.status(500).send('Internal server error in View');
        }
    }


    
    // delete CSV from DB
    deleteCSV = async (req, res) => {
        let deleteCSV = await csvModel.findByIdAndDelete(req.params.id);
        return res.redirect('back');
    }

}

