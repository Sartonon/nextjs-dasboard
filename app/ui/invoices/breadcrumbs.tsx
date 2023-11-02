import { clsx } from "clsx";
import Link, { type LinkProps } from "next/link";
import { lusitana } from "@/app/ui/fonts";

interface Breadcrumb<T> {
  label: string;
  href: LinkProps<T>["href"];
  active?: boolean;
}

export default function Breadcrumbs<T>({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb<T>[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={clsx(lusitana.className, "flex text-xl md:text-2xl")}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href as string}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? "text-gray-900" : "text-gray-500"
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
