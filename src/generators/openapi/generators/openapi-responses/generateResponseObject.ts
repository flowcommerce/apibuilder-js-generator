import { ResponseObject } from '@loopback/openapi-v3-types';
import { ApiBuilderResponse } from 'apibuilder-js';
import { generateHeadersObject } from '../openapi-header';
import { convertApiBuilderType } from '../openapi-utils';

function generateResponseObject(
  response: ApiBuilderResponse,
  validator,
  isImported,
): ResponseObject {
  const {
    description,
    headers,
    type,
  } = response;

  return {
    ...(description || type) && { description: String(description || type) },
    headers: generateHeadersObject(headers),
    content: {
      "application/json": {
        schema: convertApiBuilderType(type, validator, isImported)
      }
    },
  };
}

export default generateResponseObject;
