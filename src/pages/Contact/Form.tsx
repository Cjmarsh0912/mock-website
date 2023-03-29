import styles from './contact.module.css';

export default function Form({ handleSubmit }) {
  return (
    <div className={styles.contact_form_container}>
      <form
        action='#'
        id={styles['contact_form']}
        method='post'
        onSubmit={handleSubmit}
      >
        <fieldset className={styles.full_name}>
          <legend className={styles.title}>Name *</legend>
          <label className={styles.contact_form_input} htmlFor='fname'>
            <input
              style={{ width: '100%' }}
              name='fname'
              id='fname'
              type='text'
              required
            />
            <span className={styles.name}>First name</span>
          </label>
          <label className={styles.contact_form_input} htmlFor='lname'>
            <input
              style={{ width: '100%' }}
              name='lname'
              id='lname'
              type='text'
              required
            />
            <span className={styles.name}>Last name</span>
          </label>
        </fieldset>
        <div className={styles.contact_form_input}>
          <label htmlFor='email'>Email *</label>
          <input name='email' id='email' type='email' required />
        </div>
        <div className={styles.contact_form_input}>
          <label htmlFor='message'>Message *</label>
          <textarea id={styles['message']} required></textarea>
        </div>
        <button type='submit' className='button'>
          Send
        </button>
      </form>
    </div>
  );
}
