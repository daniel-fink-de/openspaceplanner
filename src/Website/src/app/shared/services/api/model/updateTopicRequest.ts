/**
 * OpenSpace.WebApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Attendance } from './attendance';
import { Feedback } from './feedback';
import { Rating } from './rating';


export interface UpdateTopicRequest { 
    id: string;
    name: string;
    description?: string | null;
    owner?: string | null;
    roomId?: string | null;
    slotId?: string | null;
    attendees: Array<Attendance>;
    demands: Array<string>;
    feedback: Array<Feedback>;
    ratings: Array<Rating>;
    slots: number;
}
