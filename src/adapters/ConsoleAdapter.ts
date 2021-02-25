import inquirer from 'inquirer'
import { ApplicationFactoryPort } from '../ports/ApplicationFactoryPort'

const app = ApplicationFactoryPort.create()

const questions = [
  {
    type: 'input',
    name: 'amount',
    message: 'Add amount',
  },
];

inquirer.prompt(questions).then((answers: any) => {
  const discount = app.discount(answers.amount)
  console.log('Your discount is', discount);
});