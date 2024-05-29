const SortInput = ({ onSort }) => {
  return (
    <div class="mb-3 xl:w-96">
      <select
        id="countries"
        class="rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        onChange={onSort}
      >
        <option selected value="">
          Default sort
        </option>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
    </div>
  );
};

export default SortInput;
