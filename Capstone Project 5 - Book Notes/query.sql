--
-- PostgreSQL database dump
--

-- Dumped from database version 15.12
-- Dumped by pg_dump version 15.12

-- Started on 2025-03-28 15:16:12

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 215 (class 1259 OID 16551)
-- Name: my_table_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.my_table_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.my_table_id_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16544)
-- Name: books; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.books (
    id integer DEFAULT nextval('public.my_table_id_seq'::regclass) NOT NULL,
    name text,
    notes text,
    oclc text,
    date text,
    score integer
);


ALTER TABLE public.books OWNER TO postgres;

--
-- TOC entry 3318 (class 0 OID 16544)
-- Dependencies: 214
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.books (id, name, notes, oclc, date, score) FROM stdin;
6	A Feast for Crows	Worst entry in the main series, in my opinion.	233786173	2005	8
7	A Dance With Dragons	Latest entry so far. An improvement over the previous book, as the typically less interesting story lines start to pick up in excitement.	808959845	2011	9
5	A Storm of Swords	The war in westeros rages on, while the plot in the East and at the Wall reach a new peak in their excitement.	44676135	2000	10
2	A Clash of Kings	Not nearly as captivating as the first book, but ACOK still contains many interesting stories and plots. This book also introduces Stannis, which is worth a point or 2.	500797293	1998	9
8	A Game of Thrones	The first book in the series as well as the best.	551650731	1996	10
9	Fire & Blood	The spin-off story about the Targaryen history before the main series. The second half of the book is dominated by the Dance of Dragons on which the HBO show 'House of the Dragon' is adapted from. Interesting stuff for avid fans of franchise, however not as enticing as the main novels.	1061503913	2018	7
10	A Knight of the Seven Kingdoms	Spin-off from the main series. Haven't read this one lol.	851572779	2015	0
\.


--
-- TOC entry 3325 (class 0 OID 0)
-- Dependencies: 215
-- Name: my_table_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.my_table_id_seq', 10, true);


--
-- TOC entry 3175 (class 2606 OID 16550)
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


-- Completed on 2025-03-28 15:16:12

--
-- PostgreSQL database dump complete
--

