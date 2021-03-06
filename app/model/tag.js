'use strict';
/**
 * 标签（非多租户）
 */
const { RequiredString } = require('naf-framework-mongoose/lib/model/schema');
const Schema = require('mongoose').Schema;

const SchemaDefine = {
  tagid: { type: Number, required: true, index: true },
  tagname: RequiredString(64),
};
const schema = new Schema(SchemaDefine, { timestamps: true });
schema.index({ tagid: 1 });
schema.index({ tagname: 1 });
module.exports = app => {
  const { mongoose } = app;
  return mongoose.model('Tag', schema, 'naf_tag');
};
