import {  PhotographAction } from 'schema-dts'
import { PersonAnoukDesury } from './PersonAnoukDesury'

export const PhotographActionA : PhotographAction = {

      '@type': 'PhotographAction',
      //action
      actionStatus: 'https://schema.org/CompletedActionStatus',
      agent: PersonAnoukDesury,
      endTime: '2024-01-20',// VAR
      instrument: '',// VAR
      location: '',// VAR
      //The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read a book. 
      object: '',// VAR
      result: 'mise en lumiere de ....',// VAR
      startTime : '2024-01-01',// VAR
      target: 'url_of_the_project',

      // thing
      additionalType: 'social',// VAR
      alternateName: '',// VAR
      description: '',// VAR
      image: 'prefered_img_of_the_project',
      mainEntityOfPage: 'url_of_the_project',
      name: 'project name',
      sameAs: 'url of the same project but somewhere else',// VAR
      url : 'url_of_the_project',
    }
