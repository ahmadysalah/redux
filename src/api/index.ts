import axios, { AxiosInstance } from 'axios';

class Api {
  private ax: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  getAllToDos(): Promise<any> {
    return this.ax.get('/todos');
  }

  addNewTodo(title:string): Promise<any> {
    return this.ax.post('/posts', {
      title,
      completed: false,
    });
  }
}


export default new Api();