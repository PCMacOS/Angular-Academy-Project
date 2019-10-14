export class Table {
  id: string;
  title: string;
  priority: string;
  reporter: string;
  createdAt: string;
  status: string;
}

export class ContactRequest {
  mydata: Table;
  requestType: any = '';
  text = '';
}
