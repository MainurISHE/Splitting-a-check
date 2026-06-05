import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ReceiptDto } from '../models/receipt-response.model';


@Injectable({
  providedIn: 'root'
})
export class ReceiptApiService {
  private http = inject(HttpClient);

  getReceipt() {
    return this.http.get<ReceiptDto>(
      'mock/receipt.json'
    );
  }
}