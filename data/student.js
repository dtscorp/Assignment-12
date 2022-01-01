const db = require('../config/database');

class Student {

    static all() {
        return new Promise((resolve, reject)=>{
        const _queries = "SELECT * FROM student";
        db.query(_queries, (err, result)=>{
            if (result){
                resolve(result);
            }else{
                reject("Data gagal")
            }
        });
    } );
    }
    static async create(data){
        const id = await new Promise((resolve, reject)=>{
            const _queries = "INSERT INTO student SET ?";
            db.query(_queries,data, (err, result)=>{
                if (result){
                    resolve(result);
                }else{
                    reject("Data gagal")
                }
            });
        });
    }

}

module.exports = Student;