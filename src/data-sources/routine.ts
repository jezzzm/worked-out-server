import { RESTDataSource } from 'apollo-datasource-rest';
import { routines } from '../database';

class RoutinesAPI extends RESTDataSource {
  constructor() {
    super();
  }

  getRoutine = (id: number) => {
    return routines.find((routine) => routine.id === id);
  };

  getAllRoutines = () => routines;
}

export default RoutinesAPI;
