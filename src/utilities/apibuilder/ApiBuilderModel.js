const map = require('lodash/map');
const ApiBuilderType = require('./ApiBuilderType');
const ApiBuilderField = require('./ApiBuilderField');
const FullyQualifiedType = require('./FullyQualifiedType');

class ApiBuilderModel extends ApiBuilderType {
  /**
   * Create an ApiBuilderModel.
   * @param {Object} schema - An object representing an API builder model definition.
   * @param {FullyQualifiedType} fullyQualifiedType
   * @param {ApiBuilderService} service
   */
  constructor(schema, fullyQualifiedType, service) {
    super(fullyQualifiedType, service);

    Object.defineProperty(this, 'schema', {
      enumerable: true,
      value: schema,
    });

    /**
     * @property {?String}
     */
    Object.defineProperty(this, 'description', {
      enumerable: true,
      value: schema.description,
    });

    /**
     * @property {!ApiBuilderField[]}
     */
    Object.defineProperty(this, 'fields', {
      get() {
        return map(this.schema.fields, field => ApiBuilderField.fromSchema(field, service));
      },
    });
  }
}
/**
 * Returns the ApiBuilderModel corresponding to the specified API builder model definition.
 * @param {Object} model An object representing an API Builder model definition.
 * @param {ApiBuilderService} service
 * @param {String} [namespace = service.namespace]
 * @returns {ApiBuilderModel}
 */
ApiBuilderModel.fromSchema = function fromSchema(schema, service, namespace = service.namespace) {
  const fullyQualifiedType = new FullyQualifiedType(`${namespace}.models.${schema.name}`);
  return new ApiBuilderModel(schema, fullyQualifiedType, service);
};

module.exports = ApiBuilderModel;
