const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class User extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'users'
    }

    /**
     * Returns a user by its ID
     */
    static async getByID(_, {id}) {
        return await this.find(id)
    }

 /**
     * Returns a moyen note
     */
  static async getcountNote() {

    return await this.countNote()
}


    /**
     * Returns a list of users matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all users if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching users
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new user
     */
    static async createEntry(_, {email, last_name,first_name,adresse,note}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    email,
                    last_name,
                    first_name,
                    adresse,
                    note
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a user 
     */
    static async updateEntry(_, {id, last_name, first_name,adresse,note}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    first_name,
                    last_name,
                    adresse,
                    note
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = User