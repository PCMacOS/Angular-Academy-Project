export class Table {
  id: string;
  title: string;
  priority: string;
  reporter: string;
  createdAt: string;
  status: string;
  description: string;
  comments: [
    {
      _id: string;
      reporter: string;
      description: string;
    }
  ];
}
