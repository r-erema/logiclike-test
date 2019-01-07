<?php

declare(strict_types = 1);

use MongoDB\Driver\Manager,
    MongoDB\Driver\Query,
    MongoDB\BSON\UTCDateTime,
    MongoDB\Driver\BulkWrite;

ini_set('date.timezone', 'Europe/Minsk');

const MONGO_NAMESPACE = 'logiclike-test.ip_access';
const MONGO_FIELD_IP = 'ip';
const MONGO_FIELD_VISIT_DATE = 'last_visit_date';

const BLOCK_TIME_SECONDS = 600; //10 min

$mongo = new Manager('mongodb://mongo:27017');

$query = new Query(
    [MONGO_FIELD_IP => $_SERVER['REMOTE_ADDR']],
    ['sort' => [MONGO_FIELD_VISIT_DATE => -1]]
);
/** @noinspection PhpUnhandledExceptionInspection */
$rows = $mongo->executeQuery(MONGO_NAMESPACE, $query)->toArray();
$row = $rows[array_key_first($rows)] ?? null;
$unblockTimestamp = $row !== null ? $row->{MONGO_FIELD_VISIT_DATE}->toDateTime()->getTimestamp() + BLOCK_TIME_SECONDS : 0;
if ($unblockTimestamp > time()) {
    http_response_code(403);
    header('Ip-Unblock-Date: ' . date('r', $unblockTimestamp));
    exit();
}

$bulk = new BulkWrite();
$bulk->update(
    [MONGO_FIELD_IP => $_SERVER['REMOTE_ADDR']],
    [
        MONGO_FIELD_IP => $_SERVER['REMOTE_ADDR'],
        MONGO_FIELD_VISIT_DATE => new UTCDateTime()
    ],
    ['upsert' => true]
);
$mongo->executeBulkWrite(MONGO_NAMESPACE, $bulk);

echo 'Hello world!';