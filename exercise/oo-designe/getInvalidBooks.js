import yup from 'yup';
const genres = [
    'drama', 'horror', 'fantasy', 'classic',
  ];
  

const getInvalidBooks = (arr) => {
    const schema = yup.object().shape({
      name: yup.string().required(),
      author: yup.string().required(),
      pagesCount: yup.number().positive(),
      link: yup.string().min(1).url(),
      genre: yup.string().oneOf(genres),
    });
  
    return arr.filter((book) => !schema.isValidSync(book));
  };

  export default getInvalidBooks;