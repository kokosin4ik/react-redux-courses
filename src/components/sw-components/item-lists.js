import React from 'react';
import ItemList from '../item-list';
import {
  withSwapiService,
  withData,
  compose,
  withChildFunction
} from "../hoc-helpers";


const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};

const getList = (renderFn, mapMethodsToProps) => compose(
  withSwapiService(mapMethodsToProps),
  withData,
  withChildFunction(renderFn)
)(ItemList);

const PersonList = getList(renderName, mapPersonMethodsToProps);
const PlanetList = getList(renderName, mapPlanetMethodsToProps);
const StarshipList = getList(renderModelAndName, mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};
