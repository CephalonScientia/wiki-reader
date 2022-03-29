import { mount } from "@vue/test-utils";
import BookIcon from "~/components/BookIcon.vue";

describe("BookIcon", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(BookIcon);
    expect(wrapper.vm).toBeTruthy();
  });
});
