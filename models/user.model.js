const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  full_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  ktp_number: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  birthplace: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'users', // penting: sesuaikan dengan nama tabel di DB
  timestamps: false,  // karena kamu tidak punya kolom updated_at
});

module.exports = User;
