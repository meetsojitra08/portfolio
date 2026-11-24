import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Tag } from "@/components/ui/Tag";
import { TextLink } from "@/components/ui/TextLink";

export interface ProjectRowProps {
  index: string;
  title: string;
  scope?: string;
  description: string;
  highlight?: string;
  tags: string[];
  image?: string;
  live?: string;
  github?: string;
  flip?: boolean;
  aspectRatio?: string;
  imageClassName?: string;
}

export function ProjectRow({
  index,
  title,
  scope,
  description,
  highlight,
  tags,
  image,
  live,
  github,
  flip = false,
  aspectRatio,
  imageClassName,
}: ProjectRowProps) {
  const textContent = (
    <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        {/* Index and Highlight */}
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl sm:text-3xl text-text-muted/60 tracking-wider">
            {index}
          </span>
          {highlight && (
            <Tag variant="accent" className="font-mono normal-case">
              {highlight}
            </Tag>
          )}
        </div>

        {/* Title and Scope */}
        <div>
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-text">
            {title}
          </h3>
          {scope && (
            <span className="inline-block mt-2 px-2 py-0.5 rounded border border-border/80 bg-surface/50 font-mono text-[10px] tracking-wider uppercase text-text-muted">
              {scope}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="font-mono text-sm sm:text-base text-text-muted leading-relaxed max-w-xl">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag) => (
            <Tag key={tag} variant="default">
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-6 pt-4 border-t border-border/40 font-mono text-xs">
        {live && (
          <TextLink href={live} external>
            LIVE SITE
          </TextLink>
        )}
        {github && (
          <TextLink href={github} external>
            GITHUB
          </TextLink>
        )}
      </div>
    </div>
  );

  const imageContent = (
    <div className="p-6 sm:p-10 lg:p-12 flex items-center justify-center bg-surface/30">
      <div
        className={cn(
          "relative w-full rounded border border-border bg-bg overflow-hidden group hover:border-text-muted transition-colors",
          aspectRatio || "aspect-[16/10]"
        )}
      >
        {image && (
          <Image
            src={image}
            alt={`${title} project interface preview`}
            fill
            quality={85}
            sizes="(max-width: 1024px) 100vw, 600px"
            className={cn(
              "object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none",
              imageClassName || "object-top"
            )}
          />
        )}
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 border-b border-border min-h-[460px]",
        flip ? "lg:divide-x-reverse" : ""
      )}
    >
      {/* On mobile: image always on top. On desktop: alternate according to flip */}
      <div className={cn("order-2", flip ? "lg:order-2 lg:border-l border-border" : "lg:order-1")}>
        {textContent}
      </div>

      <div className={cn("order-1", flip ? "lg:order-1" : "lg:order-2 lg:border-l border-border")}>
        {imageContent}
      </div>
    </div>
  );
}
