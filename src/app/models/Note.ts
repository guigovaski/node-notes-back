import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../instances/database';

export interface INoteInstance extends Model {
    id: number;
    title: string;
    body: string;
    createdAt: Date
}

export const Note = sequelize.define<INoteInstance>('Note', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'notes',
    timestamps: false,
    }
);
