import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
description: z.string(),
pubDate: z.date(),
heroImage: z.string().optional(),
// Esquema específico para Hotmart
hotmartProduct: z.object({
name: z.string(),
price: z.string(),
affiliateLink: z.string().url(),
ctaText: z.string().default('Comprar Ahora'),
imageUrl: z.string()
}).optional(),
}),
});

export const collections = { 'blog': blog };
