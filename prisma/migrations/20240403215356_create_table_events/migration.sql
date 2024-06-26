-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,
    "maximum_attendees" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "events_id_key" ON "events"("id");

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");
