import pkg from "../../lerna.json";

export interface PaginationProps {
  id: string;
  pages: number;
  size?: number;
  page?: number;
  primarycolor?: string;
  pagechange?: (p) => void;
}

export const createPagination = ({
  pages,
  size,
  page,
  primarycolor,
  id,
  pagechange,
}: PaginationProps) => {
  if (!document.getElementById("paginationbootstrapcomponentjs")) {
    const script = document.createElement("script");
    script.id = "paginationbootstrapcomponentjs";

    script.src = !window.location.href.includes("localhost")
      ? `https://cdn.jsdelivr.net/npm/@htmlbricks/paginationbootstrap-component@${pkg.version}/release/paginationbootstrap.js`
      : "http://localhost:6006/pagination/dist/paginationbootstrap.js";
    document.body.appendChild(script);
  }
  let c: HTMLElement;
  if (document.getElementById(id)) {
    c = document.getElementById(id);
  } else {
    c = document.createElement("paginationbootstrap-component");
    c.id = id;
    c.addEventListener("pagechange", (p: any) => pagechange(p.detail));
  }

  if (pages) {
    c.setAttribute("pages", pages.toString());
  } else {
    if (c.hasAttribute("pages")) c.removeAttribute("pages");
  }
  if (size) {
    c.setAttribute("size", size.toString());
  } else {
    if (c.hasAttribute("size")) c.removeAttribute("size");
  }
  if (page) {
    c.setAttribute("page", page.toString());
  } else {
    if (c.hasAttribute("page")) c.removeAttribute("page");
  }
  if (primarycolor) {
    c.setAttribute("primarycolor", primarycolor);
  } else {
    if (c.hasAttribute("primarycolor")) c.removeAttribute("primarycolor");
  }

  return c;
};
