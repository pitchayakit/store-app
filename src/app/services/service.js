class services {
    constructor(model) {
        this.model = model;
    }

    async findAll(option = {}) {
        const where = option.where || {};
        const include = option.include || [];

        const rows =  await this.model.findAll({
            where,
            include,
            order: [["id", "DESC"]],
        });
        
        return {
            data: JSON.parse(JSON.stringify(rows)),
        }
    }

    async findAllWithPagination(option = {}) {
        const limit = 9; // number of records per page
        const page = option.page ? Number(option.page) : 1;
        const offset = (page - 1) * limit;

        const where = option.where || {};

        const { count, rows } = await this.model.findAndCountAll({
            where,
            limit,
            offset,
            order: [["id", "DESC"]],
        });

        return {
            data: JSON.parse(JSON.stringify(rows)),
            pages: Math.ceil(count / limit),
            total: count,
        };
    }

    async findById(id) {
        const row = await this.model.findByPk(id);
        
        return JSON.parse(JSON.stringify(row));
    }

    async create(data) {
        const row = await this.model.create(data);

        return JSON.parse(JSON.stringify(row));
    }

    async bulkCreate(data) {
        const row = this.model.bulkCreate(data);

        return JSON.parse(JSON.stringify(row));
    }

    async update(id, data) {
        const row = this.model.update(data, {
            where: {
                id,
            },
        });

        return JSON.parse(JSON.stringify(row));
    }

    async delete(id) {
        const row = this.model.destroy({
            where: {
                id,
            },
        });

        return JSON.parse(JSON.stringify(row));
    }
}

export default services;