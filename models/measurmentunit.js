'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurmentUnit = sequelize.define('MeasurmentUnit', {
    name: DataTypes.STRING
  }, {});
  MeasurmentUnit.associate = function(models) {
    // associations can be defined here
  };
  return MeasurmentUnit;
};