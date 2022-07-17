import { Link } from 'react-router-dom';

function Page404Screen(): JSX.Element {
  return (
    <div >
      <h1 style={{ margin: '0 auto' }}>Ошибка 404. Страница не существует.</h1>
      <Link to='/'>Вернуться на главную страницу</Link>
    </div>
  );
}

export default Page404Screen;
