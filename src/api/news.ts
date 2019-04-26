import { INewsItem } from '../pages/News/types'

interface INewsResponse {
  status: number;
  data: INewsItem[];
  errorText?: string;
}

const fakeData = [
  {
    id: 1,
    title: 'Делаем CRUD приложение с помощью React-hooks',
    text: 'В данном конспекте создается простое CRUD-приложение без бэкэнда',
    link:
      'https://maxpfrontend.ru/perevody/delaem-crud-prilozhenie-s-pomoschyu-react-hooks/',
    timestamp: new Date('01-15-2019'),
  },
  {
    id: 2,
    title: 'Знакомство с React hooks',
    text: 'Из статьи можно узнать как использовать useState и useEffect хуки',
    link: 'https://maxpfrontend.ru/perevody/znakomstvo-s-react-hooks/',
    timestamp: new Date('01-06-2019'),
  },
  {
    id: 3,
    title: 'Авторизация с помощью Google Sign In',
    text: 'Как авторизоваться через Google Sign In по документации',
    link:
      'https://maxpfrontend.ru/vebinary/avtorizatsiya-s-pomoschyu-google-sign-in/',
    timestamp: new Date('11-02-2018'),
  },
]

export const loadNews = (): Promise<INewsResponse> => {
  const promise = new Promise<INewsResponse>(resolve => {
    resolve({
      status: 200,
      data: fakeData,
    })
  })

  return promise
}
