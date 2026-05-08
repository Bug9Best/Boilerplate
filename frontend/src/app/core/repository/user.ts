import { BaseModel, BaseService } from './base.service';
import { Injectable } from '@angular/core';

export interface userModel extends BaseModel {
  prefix_name: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  full_name?: string;
  department_id: string;
  department_name?: string;
  username: string;
  password: string;
  role: string;
  img_url?: string;
}

@Injectable({
  providedIn: 'root',
})
export class userRepository extends BaseService<userModel> {
  public override path: string = 'user';

  getAllUser(params: any) {
    return this.client.get<userModel[]>(`${this.getBaseUrl}/getAllUser`, { params });
  }

  getUserById(id: string) {
    return this.client.get<userModel>(`${this.getBaseUrl}/getUserById/${id}`);
  }

  createUser(data: userModel) {
    return this.client.post<userModel>(`${this.getBaseUrl}/createUser`, data);
  }

  updateUser(id: number, data: userModel) {
    return this.client.put<userModel>(`${this.getBaseUrl}/updateUser/${id}`, data);
  }

  deleteUser(id: number) {
    return this.client.delete<userModel>(`${this.getBaseUrl}/deleteUser/${id}`);
  }

  resetPassword(id: number) {
    return this.client.post<userModel>(`${this.getBaseUrl}/resetPassword/${id}`, {});
  }
}
