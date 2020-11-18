//const addTodoAction = {
//type: 'todos/todoAdded',
//payload: 'Buy milk'
//}
export default function selectCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}
