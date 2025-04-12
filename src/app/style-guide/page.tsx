import Button from "@/components/common/Button";
import Forms from "@/components/common/Form";
import Inputs from "@/components/common/Input";
import List from "@/components/common/List";
import { ArrowRightIcon } from "@/icons/Icons.component";

const list = ["List Element 1", "List Element 2", "List Element 3"];

export default function page () {
  return (
    <main className="w-full h-screen space-y-6 p-8 mb-8">
      <h1 className="heading-1 uppercase">Style Guide</h1>
      <hr />

      <h2 className="heading-2">Buttons</h2>
      <hr />
      <div className="flex flex-col items-start justify-center gap-4">
        <Button variant="default">Button</Button>
        <Button variant="default" size="lg">
          Button Large
        </Button>

        <Button variant="label" size="label">
          Label
        </Button>

        <Button variant="plain" size="plain">
          Arrow Right <ArrowRightIcon />
        </Button>
      </div>

      <h2 className="heading-2">Headings Classes</h2>
      <hr />
      <div className="space-y-2.5">
        <h1 className="heading-x-large">Heading Xlarge</h1>
        <h1 className="heading-large">Heading Large</h1>
        <h1 className="heading-medium">Heading Medium</h1>
        <h1 className="heading-1">Heading 1</h1>
        <h1 className="heading-2">Heading 2</h1>
        <h1 className="heading-3">Heading 3</h1>
        <h1 className="heading-4">Heading 4</h1>
        <h1 className="heading-5">Heading 5</h1>
        <h1 className="heading-6">Heading 6</h1>
      </div>

      <h2 className="heading-2">Text Classes</h2>
      <hr />

      <div className="space-y-3">
        <p className="text-large">Text Large</p>
        <p className="text-medium">Text medium</p>
        <p className="text-regular">Text regular</p>
        <p className="text-small">Text small</p>
        <p className="text-tiny">Text tiny</p>
        <p className="text-italic">Text italic</p>
        <a href="#" className="text-link">
          Text link
        </a>
      </div>

      <h2 className="heading-2">List Classes</h2>
      <hr />

      <div>
        <List
          items={list}
          renderItem={(item) => {
            return <li key={item}>{item}</li>;
          }}
          className="space-y-2"
        />
      </div>

      <h2 className="heading-2">Quote Classes</h2>
      <hr />

      <div>
        <blockquote className="blockquote-large">
          <span>&quot;</span>
          Sample text is being used as a placeholder for real text that is
          normally present.
        </blockquote>
      </div>

      <h2 className="heading-2">Form Classes</h2>
      <hr />

      <div className="pb-10">
        <Forms className="space-y-4">
          <h3 className="heading-4">Input</h3>
          <Inputs
            type="text"
            id="text"
            className="form-input"
            placeholder="Enter your email"
          />

          <h3 className="heading-4">Text-area</h3>
          <textarea
            name="textarea"
            id="textarea"
            className="form-textarea"
            placeholder="Enter your message"
            rows={4}
          ></textarea>

          <h3 className="heading-4">Select</h3>
          <select name="select" id="select" className="form-select">
            <option value="value-1">Value 1</option>
            <option value="value-2">Value 2</option>
            <option value="value-3">Value 3</option>
          </select>

          <h3 className="heading-4">Submit Button</h3>
          <Button type="submit" variant="default" size="default">
            Submit
          </Button>
        </Forms>
      </div>
    </main>
  );
}
