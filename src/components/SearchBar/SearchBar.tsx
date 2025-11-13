import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { Field, Formik, Form, type FormikHelpers } from 'formik';

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

interface SearchBarValues {
  query: string;
}

const initialValues: SearchBarValues = {
  query: '',
};

function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSearch = (
    values: SearchBarValues,
    actions: FormikHelpers<SearchBarValues>
  ) => {
    if (values.query.trim() === '') {
      toast.error('Please enter your search query.');
      return;
    }
    onSubmit(values.query);
    actions.resetForm();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <Formik initialValues={initialValues} onSubmit={handleSearch}>
          <Form className={styles.form}>
            <Field
              className={styles.input}
              type="text"
              name="query"
              autoComplete="off"
              placeholder="Search movies..."
              autoFocus
            />
            <button className={styles.button} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </div>
    </header>
  );
}

export default SearchBar;
