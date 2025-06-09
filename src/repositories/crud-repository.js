const { where } = require("sequelize");
const {Logger} = require("../config/index")

class CrudRepository{

    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("something went wrong in the Crud repo : create");
            throw error;
        }
    }

    async delete(data){
        try {
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error("something went wrong in the Crud repo : delete");
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data)
            return response;
        } catch (error) {
            Logger.error("something went wrong in the Crud repo : get");
            throw error;
        }
    }

    async getAll(){
        try {
            const response = await this.model.findAll()
            return response;
        } catch (error) {
            Logger.error("something went wrong in the Crud repo : getAll");
            throw error;
        }
    }


    async update(id,data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            })
            return response;
        } catch (error) {
            Logger.error("something went wrong in the Crud repo : update");
            throw error;
        }
    }
}

module.exports = CrudRepository;