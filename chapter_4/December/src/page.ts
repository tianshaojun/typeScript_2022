// ///<reference path='./components.ts' />

// namespace Home {
//   export class Page {
//     user: Components.User = {
//       name: 'dell',
//     }
//     constructor() {
//       new Components.Header()
//       new Components.Content()
//       new Components.Footer()
//     }
//   }
// }

//import语句
//=======================================
import { Header, Content, Footer } from './components'
export default class Page {
  constructor() {
    new Header()
    new Content()
    new Footer()
  }
}
