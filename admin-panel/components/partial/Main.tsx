import Input from "@/components/input";

const Main = () => {
  return (
    <section className="w-[81%] float-left ml-10">
      <div className="top-section bg-white py-10">
        <select name="category" id="">
          <option value="">All category</option>
          <option value="">Business</option>
          <option value="">social</option>
        </select>
        <Input
          type="text"
          name="search"
          cssClass=""
          placeholder="Enter your Name"
        />
        <Input
          type="button"
          name="search"
          cssClass=""
          
        /> 
      </div>
    </section>
  );
};

export default Main;
